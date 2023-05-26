# TEST MAPPING WORKSHOP

This repo was created as part of the [Test automation Mapping Workshop at Automatyzcja Testów W Praktyce Conference](https://atwpraktyce.pl/)

Note that this repo is not a complete solution, but rather a starting point for the workshop. 
Full of delibratly broken code.



During Workshop
You will work in groups of 3-5 people. 
Together by exploratory test and code audit you will try to undestand how appliaction works.

Then you will reorginze test and map them to actual business requirements.

## Test naming convention

For the e2e tests in repo please use following guidelines:
1. For the suffix, please use `*.spec.js` for test level clarity
2. Test file names should describe main tested area. Example: `cart.spec.js`. 
For longer names please use camelCase convention.
3. Test suites should combine `describe` and `it` blocks into the one phrase 
explaining the test intention. Example
```javascript
describe('Collections', () => {
    it("are displayed and filtered by trending", () => {
    })
```

## For the workshop you will need:
1. Installed node and npm
2. Ide of your choice that is supporing JavaScript
3. Zoom for communication
4. Access to slack (send in mail)
5. Access to fork of this repo (send in mail)
6. Access to currents.dev (send in mail)


## Workshop Author:

Maciej Wyrodek
* Blog: https://wyrodek.pl
* Youtube: https://www.youtube.com/@ITeaMorning
* Twitter: https://twitter.com/maciejwyrodek
* Linkedin: https://www.linkedin.com/in/wyrodek/
* Facebook:https://www.facebook.com/MaciejWyrodek.ITea/


