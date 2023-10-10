// This is a static page mocking an "About Us" section for our fake user data
export default function aboutme() {
  return (
    <>
      <section className="aboutme">
        <div className="container row justify-content-between">
          <h1 className="text-center">Hello & Welcome! </h1>
          <h2 className="text-center bold">My name is Allen Hirmiz. </h2>
          <img
            src={"/images/allenhirmiz.jpg"}
            alt="Profile Picture of Allen Hirmiz"
            className="rounded-circle col-1"
            style={{ width: "25%", height: "25%" }}
          />
          <p className="col-3">
            I am a former Middle & High School Algebra and Geometry teacher. I
            have taught for over 9 years now in education.
          </p>
          <p className="col-3">
            I currently hold a Certification from the Bootcamp Program for
            Full-Stack Web Development at CU-Denver. I am hoping to integrate my
            educational background with my newly acquired Web Development
            skills.
          </p>
          <p className="col-3">
            I have developed skills involving but not limited to: HTML, CSS,
            Javascript, APIs, Node.js, OOP, Express,js, SQL, ORM, MVC, NoSQL,
            PWA, MongoDB, Mongo Atlas, React, and MERN Stack.
          </p>
          <p className="text-center">
            Feel free to explore some of my applications and projects on my
            Portfolio link in the top of the NavBar. As well as Contact me with
            any questions, comments or feedback on my Contact link in the
            NavBar.
          </p>
        </div>
      </section>
    </>
  );
}
