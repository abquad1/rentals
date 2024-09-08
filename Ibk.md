# Logo Animation Enhancement

## Overview
I've added a subtle animation to the logo in our Navbar component using Tailwind CSS. 
## Implementation Details

1. **Tailwind Configuration**
   I extended our Tailwind configuration in `tailwind.config.ts` to include custom animation properties:

   ```typescript
   theme: {
     extend: {
       animation: {
         move: 'move 5s linear infinite',
       },
       keyframes: {
         move: {
           '0%': { transform: 'translateX(0)' },
           '50%': { transform: 'translateX(10px)' },
           '100%': { transform: 'translateX(0)' },
         },
       },
     },
   },
   ```

2. **Application in Navbar Component**
   In `app/Components/Navbar.tsx`, I applied the animation to the logo container:

   ```jsx
   <div className='xs: h-1 w-2/5 animate-move'>
     <Link href="#Landing">
       <Image width={80} height={10} alt='' src="/RentalImages/logo.png" style={{ width: 'auto', height: 'auto' }}></Image>
     </Link>
   </div>
   ```

   The `animate-move` class applies our custom animation.

3. **CSS Fallback**
   I also added a CSS fallback in `app/Components/Navbar.css` for browsers that might not support Tailwind's animations:

   ```css
   .animate-logo {
       animation: move 5s linear infinite;
   }

   @keyframes move {
       0% { transform: translateX(0); }
       50% { transform: translateX(10px); }
       100% { transform: translateX(0); }
   }
   ```

## Effect
The logo now smoothly moves 10 pixels to the right and back to its original position in a continuous 5-second cycle. This subtle movement adds a dynamic element to our navbar without being distracting.

## Benefits
- Enhances visual interest
- Draws attention to the brand logo
- Demonstrates modern, interactive design principles

This animation is lightweight and doesn't affect performance, making it a simple yet effective way to improve our user interface.

3 **FireBase**
- you can actually use firebase as the database go and read the documentation But I have built a simple backend service just to store your data in the folder 
You can just take a look at it.



## Backend Service

I've created a simple backend service to store your data. This backend is located in the `backend` folder of your project. It's important to note that this backend service is not yet complete and is intended as a starting point for data storage.

### Navigating to the Backend Folder

To access the backend service:

1. Open your terminal or command prompt.
2. Navigate to your project's root directory.
3. Enter the backend folder by running:
   ```
   cd backend
   ```

### Starting the Server

To start the backend server:

1. Ensure you're in the `backend` folder.
2. Install the necessary dependencies (if you haven't already):
   ```
   npm install
   ```
3. Start the server by running:
   ```
   node index.js
   ```
   
   
The server should start and you'll see a message: "The app is listening...."

### Current Functionality

The backend currently includes:

- An Express server set up to listen on port 3001.
- A POST route at `/v1/hotel` that accepts form data.
- Basic validation to check if all required fields are present.

### Next Steps

This backend is a work in progress. You may want to:

- Implement actual database integration (e.g., with MongoDB or PostgreSQL).
- Add more robust error handling and input validation.
- Implement additional routes for CRUD operations.
- Set up environment variables for sensitive information.

Remember to refer to the `index.js` file in the backend folder for the current implementation details and to make any necessary modifications as you develop your application further.

