---
title: AWS IAM-prep
description: description
date: '2019-02-16'
tags: ['aws']
---

## Customize your sign-in link

After entering AWS console you can customize your sign-in link initially it is just a bunch of
numbers you can change it to any publicly available name 

## Activate Multi-factor Authentication (MFA) on your root account

If some one has root access to you AWS account they have full control it is always as good idea to activate MFA

To do this click on the link to set up MFA and continue to your security credentials 

Choose multi-factor authentication on your root account and setup a **Virtual MFA device** you can then download the **Google Authenticator** app and use this as your second form of authentication

You will be given access to a QR code you should take a picture of this code so that if you ever
lose access you can always regain it with this QR code

If you downloaded the app and you hold your phone up to it, it should immediately recognize it and ask if you want to add it to the app. Now if you open the Authenticator app you will have a random 6 digit number that will continuously change. 

Now you can enter the six digit code for step 3 where it asks for two consecutive MFA codes. You
will need to two wait for the code to change before you enter it a second time. After this you can go ahead and click on **assign MFA.** 

Now you can head back to your IAM dashboard.

### Side Note

You may have noticed the region in the top right says *Global*. When you're creating users or groups it is always on a global basis. Your users are not locked to specific regions.

## Create individual IAM users

* Click on create individual IAM users
* Add your user name

You have two options **Programmatic access** and **AWS Management Console access**.

* Programmatic access allows you to interact with things like an EC2 instance
* AWS Management Console allows access to the console

You can choose your password next and also give you user the ability to change it automatically when they sign in. 

Now you can assign permissions, but first you will need to create a group. When you create a group you add policies to that group. There are a ton of policies you will most likely be fine setting up the new user as an administrator unless you specifically know the policy you'd like to assign.

You can now optionally add tags which are key value pairs where you can add things such as an email address or job description.

After setting up your tags you can now move on to the review. Before you finish up make sure to
download the credentials as this will be the only time they are available to you.

### A note on policies

If you click on *Policies* on the left hand side of the screen you can open up all of the various
policies. You can click the drop down arrow next to one of them and view the policy as a JSON. Here is an example of the AdministratorAccess policy: 

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
    }
```

## Apply an IAM password policy

Finally we can create a password policy, you can set things like

* Minimum password length:
* Require at least one uppercase letter
* Require at least one lowercase letter
* Require at least one number
* etc..

You can also set a time for passwords to expire and prevent reuse.

## credentials.csv

The credentials csv you downloaded earler will have the following:

* Username - the user's username
* Password - the password you chose 
* Access key ID - used to programmatically access the AWS console
* Console login link - link to our console

## Wrap up

* IAM is universal. It does not apply to regions at this time
* The "root account " is simply the account created when you first setup your AWS account. It has
    complete Admin access
* New Users have NO permissions when first created
* New users are assigned Access Key ID & Secret Keys when first created
* These are not the same as a password. You cannot use the Access key ID & Secret Access Key to
    login to the console. You can use this to access AWS via the APIs and Command Line.
* You only get to view these once. If you lose them, you have to regenerate them. So save them some place safe.
* Always set up Multifactor Authentication on your root account.
* You can create and customize your own password rotation policies.
