import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Contact.css';

function handleFocus(event) {
    event.target.setAttribute('data-touched', 'true');
}

function Contact() {
    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <br /><br />
            <div class="google-form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegQp4yfvs7P5dlxyETZHEUNZmWrIL0tDhkOViTWcIx4DD28Q/viewform?embedded=true" width="80%" height="1200px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default Contact;
