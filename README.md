# Exam 01.09.2021
This is the frontend with Angular. The file that listen for event(change) from the input is search.component.ts. To check the implementation open http://localhost:4200/property/search after Angular starts(#ng s). By moving out of the input field the calculation is in the client with typescript with the mrhod calculate() in ..\src\app\property\search\search.component.ts. By clicking on calculate a request is send through the method onSubmit() in the same file, to the beckend with spring. And the respond is how many int there are in the received string.

