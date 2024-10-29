const course =
    {
        courseName: "Js Course",
        Price: 999,
        courseInstructor: "Hitesh"
    }

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({company}) => { // destructuring in React

// }

// navbar(company = "Hitesh")