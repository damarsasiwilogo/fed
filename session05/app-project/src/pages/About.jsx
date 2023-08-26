import Navigation from "../components/Navigation";

function About ({text}) {
    return (
        <>
        <main>
            <h2>Who are we?</h2>
            <p>We are JCWD!</p>
            <p>{text}</p>
            </main>
            <Navigation/>
        </>
    );
}
export default About;