// MOD Submission Handler for Escape From Duckov
class MODSubmissionHandler {
  constructor() {
    this.initForm();
    this.bindEvents();
  }

  initForm() {
    this.form = document.querySelector('contact form');
    this.submitBtn = document.getElementById('contactLink');

    if (this.form && this.submitBtn) {
      this.submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleSubmission();
      });
    }
  }

  bindEvents() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmission();
      });
    }
  }

  handleSubmission() {
    const formData = new FormData(this.form);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const topic = formData.get('topic')?.trim();
    const message = formData.get('message')?.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Create MOD submission object
    const modSubmission = {
      name: name,
      email: email,
      topic: topic,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // For demo purposes - show what would be submitted
    console.log('MOD Submission:', modSubmission);
    alert(`Thank you for your MOD submission!\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\nMessage: ${message}\n\nWe'll review your submission and contact you if needed.`);
  }
}

// Initialize MOD submission handler
document.addEventListener('DOMContentLoaded', () => {
  new MODSubmissionHandler();
});