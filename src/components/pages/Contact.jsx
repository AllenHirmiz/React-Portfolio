import '../styles/Contact.css';

function handleFocus(event) {
    event.target.setAttribute('data-touched', 'true');
}

function Contact() {
    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required onFocus={handleFocus} />
                    </div>
                    <div className="invalid-feedback">Name is required</div>
                </div>
                
                <div className="form-group">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required onFocus={handleFocus} />
                    </div>
                    <div className="invalid-feedback">Please enter a valid email address</div>
                </div>

                <div className="form-group">
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required onFocus={handleFocus}></textarea>
                    </div>
                    <div className="invalid-feedback">Message is required</div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
