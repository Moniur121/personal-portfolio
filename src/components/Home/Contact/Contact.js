import React from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6was5fq', 'template_xayxb0s', e.target, 'user_FgKaJEcRHw0TsCMFjdslN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="text-center text-light mb-5">
                    <h5 className="text-danger">CONTACT</h5>
                    <h4 className="text-light">Always Contact With You</h4>
                    <div className="commonBorder"></div>
                </div>
                <div>
                    <form action="" onSubmit={sendEmail}>
                        <input type="email" name="email" id="" className="form-control mb-3" placeholder="Email" />
                        <input type="text" name="subject" id="" className="form-control mb-3" placeholder="Subject" />
                        <textarea class="form-control mb-4" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                        <input type="submit"  value="Submit" class="btn btn-danger text-light" style={{ marginLeft: '50%' }} />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;