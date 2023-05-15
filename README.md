# LunarNextFE

This is a Next.js web application that serves as an IT helpdesk. It incorporates a built-in ChatGPT messenger to answer IT-related queries in real-time.

## Technologies Used

- Next.js
- TypeScript
- JavaScript
- React
- Tailwind CSS with Flowbite
- Zustand (for state management)

## Features

The application allows users to log in as either a User or an Admin. Each role has its own set of permissions:

- Admins can edit tickets and view all available tickets.
- Users can view and edit their own tickets.

## Installation & Usage

Follow these steps to run the project on your local machine:

1. Clone the repository: `git clone [frontend-repo-link]`
2. Navigate into the directory: `cd lunarnext`
3. Install the dependencies: `npm install`
4. Run the local server: `npm run dev`

After running these commands, you should be able to access the application at `http://localhost:3000` (or whatever port you have configured).

### Tickets Component

The Tickets component fetches and displays a list of tickets. Users can assign themselves to a ticket and navigate to a detailed view of each ticket.

# Code that refers to "Comments" is referring to the Notes section of the tickets.

# CREDITS

ChatGPT played a huge part in debugging and getting skeleton code for specific functions.
Shoutout to @DylanAbott for assistance with getting the GPT bot working.
Login page animated background credits go to the following free source @vecteezy.com and their creator.
<a href="https://www.vecteezy.com/video/3194533-moonbeam-over-the-river-and-mountains">Moonbeam Over The River And Mountains Stock Videos by Vecteezy</a>
