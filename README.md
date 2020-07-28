# Fitzwilliam Museum Tessitura template

This repository holds code for the template used by our installation of the
Tessitura system. This is built using Jekyll and is a very simple system.

TNEW pulls this HTML code into their engine and injects the container and scripts needed for it to run and deliver ticketing and membership functions.

The CSS overrides many of the default options that come out of the box from Tessitura. The /js/classes.js file holds various jquery overrides for addding and removing classes and functions.  Generally this has followed the KISS principle.

![A screenshot of the TNEW instance](/images/screenshots/tnew-screenshot.png)

## To run locally

* Install Jekyll on your machine following these [instructions](https://jekyllrb.com/docs/installation/)
* Install Git on your machine following these [instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Clone the code for this repository:
   `git clone https://github.com/FitzwilliamMuseum/tessitura-fitz tessitura-fitz`
* Change to the directory and then run this command in terminal `bundle exec jekyll serve`

## Credits

Copyright the University of Cambridge unless noted otherwise.

Website by [@portableant](https://github.com/portableant)

CSS framework: http://daemonite.github.io/material/

## Licenses

* AGPL for code
* CC-BY for content (text and images) unless stated
otherwise
* Some content is under institutional licence and will be highlighted if so.

## Contributing guidelines

If you want to contribute fixes to this site, you are very welcome to do so. To
do this, either add a [bug report under issues](https://github.com/FitzwilliamMuseum/tessitura-fitz/issues) or fork the repository and create a new branch for proposed fixes and then submit
a pull request.
