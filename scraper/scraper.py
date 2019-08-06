import smtplib

import requests
from bs4 import BeautifulSoup
#pull the data from the amazon website

URL = 'https://www.amazon.com/Mirrorless-Digital-Camera-Starter-Accessory/dp/B07SKY5X7S/ref=sr_1_2_sspa?keywords=sony+a7&qid=1565117617&s=gateway&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3WlZZUExJRURVRjUmZW5jcnlwdGVkSWQ9QTAxMjkwNTYzUVVRSzlCMzBWT1JEJmVuY3J5cHRlZEFkSWQ9QTA3Mjk3NDkxQTFQN1RXOFBGWDIwJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='

headers = {"User-Agent" : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'}




def check_price():
    # make a call
    page = requests.get(URL, headers=headers)

    # pull out individual peices of information of the website
    soup = BeautifulSoup(page.content, 'lxml')

    title = soup.find(id="productTitle").get_text()
    title.strip()
    price = soup.find(id="priceblock_ourprice").get_text()

    convertedPrice = price[0:6]  # it is whole number wothout decimal
    convertedPrice = convertedPrice.replace(",","")
    convertedPrice = convertedPrice.replace("$", "")
    var2 = float(convertedPrice)

    if (var2 < 1700):
        send_mail()

    if (var2 > 1700):
        send_mail()


def send_mail():
    server = smtplib.SMTP("smtp.gmail.com",587); # setup connection between our connection and gmail connection
    server.ehlo() # establishes connection
    server.starttls() # encrypts our connection
    server.ehlo()

    server.login('ravvaru6@gmail.com','hhpzkigdoeagdmny')

    subject = "Hey Price Fell Down!"
    body = "Check the amazon link https://www.amazon.com/Mirrorless-Digital-Camera-Starter-Accessory/dp/B07SKY5X7S/ref=sr_1_2_sspa?keywords=sony+a7&qid=1565117617&s=gateway&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3WlZZUExJRURVRjUmZW5jcnlwdGVkSWQ9QTAxMjkwNTYzUVVRSzlCMzBWT1JEJmVuY3J5cHRlZEFkSWQ9QTA3Mjk3NDkxQTFQN1RXOFBGWDIwJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ== "

    message = f"Subject: {subject}\n\n{body}"

    server.sendmail(
        'ravvaru6@gmail.com',
        'ravvaru@asu.edu',
        message

    )

    print("Hey Email Sent")



check_price()