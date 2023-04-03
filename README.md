# Grand Hotel FrontEnd

Gran Hotel, a well-known national hotel chain, requires keeping a record of all guests who enter through reception. In this sense, it is required to have a graphical interface that allows the registration of the guest's data.

## Features

- Check-in for guests
- Check-out for guests

# Table of contents

1. [Tech Stack](https://github.com/joxedanielc/gran-hotel.git#tech-stack)
2. Code Explanation
   1. [Functions](https://github.com/joxedanielc/gran-hotel.git#functions)
   2. [Utils](https://github.com/joxedanielc/gran-hotel.git#utils)
3. [Run Locally](https://github.com/joxedanielc/gran-hotel.git#run-locally)
4. [Feedback](https://github.com/joxedanielc/gran-hotel.git#feedback)
5. [License](https://github.com/joxedanielc/gran-hotel.git#license)

## Tech Stack

**Client:** ReactJS, NextJS, Typescript, HTML5, CSS3

## Code Explanation

### Functions

The file `api/index.ts` provides a set of utility functions for interacting with a hotel management API. The functions handle tasks such as registering a guest, performing guest checkout, fetching available rooms, and retrieving the list of current guests. The functions use fetch to make HTTP requests to the API and handle errors if the API calls are unsuccessful or if the responses are not as expected. The exported functions can be easily imported and used in other parts of the application.

### Utils

The file `utils.ts` defines two utility functions to handle timezone and date-time conversions:

`getTimezone`: This function returns the timezone of the user's device by using the Intl.DateTimeFormat object. It doesn't take any parameters and returns the IANA timezone name as a string.

`localDateTimeToUTC`: This function takes a local date-time string in the format "YYYY-MM-DDTHH:mm" as an input and converts it to a UTC date-time string. It first splits the input into date and time, and then creates a Date object using the formatted date and time. It then calls toLocaleString with the appropriate options, including the timezone obtained from the getTimezone function, to convert the local date-time to a UTC date-time string. Finally, the function returns the converted UTC date-time string in the format "YYYY-MM-DDTHH:mm".

## Run Locally

### Important:

Clone the project

```bash
  git clone https://github.com/joxedanielc/gran-hotel.git
```

Go to the project directory

```bash
cd gran-hotel
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Feedback

If you have any feedback, please leave a comment.

## License

[MIT](https://choosealicense.com/licenses/mit/)