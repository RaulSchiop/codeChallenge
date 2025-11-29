# Code Challange

## How to run the application

### 1 Install dependencies

Forntend
```
cd frontend
npm install
```
Backend
```
cd backend
mvn install
```

###2 Run The app

Frontend 
```
npm start
```

Backend 
```
mvn spring-boot:run
```

Postgrass Sql
```
docker run --name adbooking-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=adbooking \
  -p 5432:5432 \
  -d postgres:15
```
Database is in the shema.sql and data.sql


Tests
I should add more tests and expand the business logic, as most of the validation is currently handled on the frontend.
```
//Navigate to your project root
mvn test
```

# Assumptions
I assumed that I need IDs for AdSpace and BookingList, and I used long types because I’m unsure how large the database might grow.
A wrong decision I made was not spending more time on frontend error handling; right now, errors come from Zod, which doesn’t provide much information to the user. With the limited time, I couldn’t improve this.

# Improvements With More Time

With more time and possibly guidance from someone more experienced in parts of this stack, I would improve the frontend:

Learn more about MUI – there’s a lot to learn. I had some issues due to lack of experience, spending a lot of time on documentation and YouTube videos. My previous experience with React Native helped, as the concepts are similar.

Improve Zod error handling – learn how to show better error messages, including custom messages.

Refactor Zustand state management – to have better structure for error handling.

Improve file structure – right now, it’s messy. Main components should be split into more reusable pieces. Currently, two components have large sections that could be split, especially the list parts which are repeated in different components.

Improve my testing skills in Java – I realized I am not as good as I initially thought.

# App Improvements

* Add routing.

* Add authentication with role-based access (JWT or OAuth).

* Add an admin page to view bookings, where an admin can approve or reject them.
* Add more meaningful tests to the backend (currently, most validation is on the frontend).
* Improve styling to make the app more visually appealing.



This project helped me better understand my weaknesses. Thank you for revealing them and helping me see what I need to learn more about. I also discovered some cool new technologies. I am very excited about the opportunity you gave me and hope to hear from you in the future.
