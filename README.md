# Refir - Grow your user-base with referrals

Refir is a Node.js library that simplifies the management of referral programs for startups. With Refir, you can easily integrate referral functionality into your application, allowing you to track referrals, assign referral codes, and more.

## Prerequisites

Before you can start using Refir, you'll need to complete the following steps:

1. **Sign Up at Our Website**: To access the Refir API and obtain an API key, you must first sign up at our website [refir](https://refir.vercel.app). Once you've signed up, you'll be able to log in to your dashboard to manage your referral program, track users, and access insights and reports.

2. **Obtain Your API Key**: After signing up and logging in to your dashboard, you'll find your unique API key in the campaign settings or API section of your dashboard. This API key is required to configure Refir and make API requests.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Adding a User](#adding-a-user)
  - [Getting a User by ID](#getting-a-user-by-id)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Refir, you can install it using npm or yarn:

```bash
npm install refir
# or
yarn add refir
```

## Configuration

Before using Refir, you need to configure it with your API key. You can do this as follows:

```javascript
const Refir = require("refir");

const refir = new Refir();
refir.configure({ apiKey: "your-api-key" });
```

## Usage

### Adding a User

You can use Refir to add a user to your referral program. The following example demonstrates how to do this:

```javascript
const user = {
  userId: "unique-user-id",
  name: "John Doe",
  email: "johndoe@example.com",
};

const user = await refir.addUser(user);

if (user.status) {
  console.log(user);
  console.log("User added successfully.");
} else {
  console.error("Failed to add user.");
}
```

### Getting a User by ID

You can retrieve a user's referral code by their unique ID using Refir. Here's an example of how to do it:

```javascript
const userId = "unique-user-id";

const referral = await refir.getUserById(userId);

if (referral.status) {
  console.log(`User's referral code and link: ${referralCode.data}`);
} else {
  console.error("Failed to get user referral code.");
}
```

## Error Handling

Refir provides basic error handling for API requests. If an error occurs during an API request, an error message will be logged to the console, and the function will return `false`. You can customize error handling to suit your application's needs.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or want to contribute to the development of Refir, please check out our [contribution guidelines](CONTRIBUTING.md).

## License

Refir is licensed under the [MIT License](LICENSE).

---

Feel free to customize this documentation to match your package's specific features and requirements. Make sure to include relevant information about how to use your library and any additional functionality it provides.
