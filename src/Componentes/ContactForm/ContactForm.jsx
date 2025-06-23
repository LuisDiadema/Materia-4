import { useState, useEffect } from 'react'
import './ContactForm.css'

// Components
import Button from '../Button/Button'

function ContactForm () {
    return (
        <div>
            <div className="contact-form d-flex fd-column al-center">
                <h2>We love meeting new people and helping them.</h2>
                <form>
                    <div className="d-flex form-group">
                        <input 
                            className="form-input"
                            type="text"
                            id="name"
                            placeholder="Name *"
                        />
                        <input 
                            className="form-input"
                            type="email"
                            id="email"
                            placeholder="E-mail *"
                        />
                    </div>
                    <div className="d-flex form-group">
                        <textarea 
                            className="form-input"
                            id="message"
                            name="mesage" 
                            placeholder="Mensagem *"
                            row="4"
                        ></textarea>
                    </div>
                    <div className="al-center d-flex jc-end from-group">
                        <Button type="submit" buttonStyle="primary">
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm