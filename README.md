# ByteAgents
Hi we ByteAgents!!!!!!!!!!!!!!!!!!!!!!!!
## Development
### Message to Ruhit
- I installed the following packages on your react/next.js frontend without knowing. Consider deleting if necessary
    - express, morgan, mongoose

### API guideline
- Add line to **frontend** package.json
```json
  "proxy": "http://localhost:<PORT>",
```
- cd into backend directory and run `npm start dev` to run server for APIs. *(You may need to create .env file with variable PORT=xxxx)*
```py
user
http://127.0.0.1:4000/api/user                      # GET all users
http://127.0.0.1:4000/api/user/<id>                 # GET user by id
http://127.0.0.1:4000/api/user                      # POST user
http://127.0.0.1:4000/api/user/<id>                 # DELETE user
http://127.0.0.1:4000/api/user/<id>                 # PATCH user (update)
http://127.0.0.1:4000/api/user/<id>/addCourse       # POST add course (work in progress)
http://127.0.0.1:4000/api/user/<id>/removeCourse    # DELETE remove course (work in progress)
```
```py
course, wallet, lesson
http://127.0.0.1:4000/api/course                    # GET all users
http://127.0.0.1:4000/api/course/<id>               # GET user by id
http://127.0.0.1:4000/api/course                    # POST user
http://127.0.0.1:4000/api/course/<id>               # DELETE user
http://127.0.0.1:4000/api/course/<id>               # PATCH user (update)
```


## Topic
### *Crypto Education and Investment Platform for Financial Inclusion (SDG 1 & 4)*:
- *Product Overview*: A mobile and web platform designed to provide educational resources and access to crypto investment opportunities for people in underbanked regions or those lacking financial literacy.
- *Features*:
    - *Interactive Learning Modules*: Engaging educational content explaining blockchain technology, cryptocurrencies, and investment strategies tailored for users with varying levels of financial literacy.
    - *Accessible Investment Tools*: User-friendly interfaces for buying, selling, and managing cryptocurrencies, with low entry barriers and minimal transaction fees.
    - *Community Engagement*: Social features facilitating discussions, mentorship, and peer-to-peer support among users to foster a collaborative learning environment.
- *Impact*: By promoting financial inclusion and literacy (SDG 1) and quality education (SDG 4), the platform empowers individuals to participate in the digital economy, build wealth, and improve their socio-economic well-being.

## Deliverables
1. Courses webpages
2. User Authentication (Login) 
3. Fake crypto currency wallet system, trade based on real-world statistics
    - Logic to earn currency (eg: finishing courses, solving questions)
4. Course progress on a per user basis
5. System to connect with other users and mentors

## Models
- User: id, name:str, role:str, username:str, email:str, password:str, coursesEnrolled:arr(Course)
- Course: id, name:str, details:str, lessons:arr(Lesson)
- Lesson: topic:str, objectives:arr(str)
- Wallet: id, currencies:arr(Currency)
- Currency: Pull from API probably


#
### Git Command References
```bash
### Formatted log history
>>> git log --graph --pretty=oneline --abbrev-commit
```
