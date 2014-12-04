
Language Pack Installer
=============
This application simplifies the process of deploying language packs.
Once installed from the marketplace, this application provides a means for patching a Pentaho installation with a set of messages translated to some language (Klingon in this example.)

# Version 1

Quickly deploy an application that assists users, translators and the community to install a language pack in Pentaho.
Effectively, this application provides a means for distributing the effort on translating the Pentaho platform into the 100+ languages in the world.

Use cases:

* translators can manually edit the files contained in this application without needing to know where the files are supposed to be installed
* users can finally have Pentaho in their favourite languages


## Main dashboard

### Goal

Provide minimum functionality for the application: install the language pack files.
The users should also be able to contact the maintainer/translator for glitches and suggestions.

### Mockup 

![image](img/mockup_main_v1.png)

### Actions

The user can only click on the "Install" button (or not).
Once installed, the button is disabled.
If the user desires to reinstall the language pack, he/she needs to manually reload the page: the "Install" button becomes available again.