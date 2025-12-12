// Presentation Controller for Argao Gun Club
class Presentation {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = slidesData.length;
    this.notesVisible = false;
    this.isPresenterMode = false;
    
    this.init();
  }

  init() {
    // Check for presenter mode
    const urlParams = new URLSearchParams(window.location.search);
    this.isPresenterMode = urlParams.get('presenter') === 'true';
    
    if (this.isPresenterMode) {
      document.body.classList.add('presenter-mode');
    }

    // Render all slides
    this.renderSlides();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Show first slide
    this.showSlide(1);
    
    // Update notes if in presenter mode
    if (this.isPresenterMode) {
      this.updateNotes();
    }
  }

  renderSlides() {
    const container = document.getElementById('slidesContainer');
    
    slidesData.forEach((slide, index) => {
      const slideNum = index + 1;
      const slideEl = this.createSlideElement(slide, slideNum);
      container.appendChild(slideEl);
    });
  }

  createSlideElement(slide, slideNum) {
    const div = document.createElement('div');
    div.setAttribute('data-slide', slideNum);
    
    switch (slide.type) {
      case 'title':
        div.className = 'slide title-slide';
        div.innerHTML = this.renderTitleSlide(slide);
        break;
      case 'thankyou':
        div.className = 'slide thank-you-slide';
        div.innerHTML = this.renderThankYouSlide(slide);
        break;
      case 'content':
      default:
        div.className = 'slide content-slide';
        div.innerHTML = this.renderContentSlide(slide);
        break;
    }
    
    return div;
  }

  renderTitleSlide(slide) {
    const titleStyle = slide.titleStyle ? ` style="${slide.titleStyle}"` : '';
    return `
      <h1${titleStyle}>${slide.title}</h1>
      <div class="divider"></div>
      <p class="subtitle">${slide.subtitle}</p>
      <p class="tagline">${slide.tagline}</p>
    `;
  }

  renderThankYouSlide(slide) {
    return `
      <h2>${slide.title}</h2>
      <div class="divider"></div>
      <p>${slide.message}</p>
    `;
  }

  renderContentSlide(slide) {
    let html = `
      <div class="slide-header">
        <h2>${slide.title}</h2>
      </div>
      <div class="slide-content">
    `;

    // Center text (for simple slides like prayer)
    if (slide.centerText) {
      html += `<p class="center-text">${slide.centerText}</p>`;
    }

    // Intro text
    if (slide.intro) {
      html += `<p class="intro-text">${slide.intro}</p>`;
    }

    // Simple items list
    if (slide.items && !slide.sections) {
      html += '<ul>';
      slide.items.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += '</ul>';
    }

    // Sections with intro and items
    if (slide.sections) {
      slide.sections.forEach(section => {
        html += `<p class="intro-text" style="margin-top: 20px;">${section.intro}</p>`;
        html += '<ul style="margin-top: 10px; margin-left: 20px;">';
        section.items.forEach(item => {
          html += `<li>${item}</li>`;
        });
        html += '</ul>';
      });
    }

    // Footer text (non-duration)
    if (slide.footer) {
      html += `<p class="intro-text" style="margin-top: 30px;">${slide.footer}</p>`;
    }

    html += '</div>';

    // Duration footer
    if (slide.duration) {
      html += `
        <div class="slide-footer">
          <p class="duration">Duration: ${slide.duration}</p>
        </div>
      `;
    }

    return html;
  }

  showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('slideCounter');
    const progressBar = document.getElementById('progressBar');

    if (n > this.totalSlides) this.currentSlide = this.totalSlides;
    else if (n < 1) this.currentSlide = 1;
    else this.currentSlide = n;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[this.currentSlide - 1].classList.add('active');

    prevBtn.disabled = this.currentSlide === 1;
    nextBtn.disabled = this.currentSlide === this.totalSlides;

    counter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
    
    const progress = ((this.currentSlide - 1) / (this.totalSlides - 1)) * 100;
    progressBar.style.width = progress + '%';

    // Update presenter notes if in presenter mode
    if (this.isPresenterMode) {
      this.updateNotes();
    }
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  previousSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  toggleNotes() {
    this.notesVisible = !this.notesVisible;
    const panel = document.getElementById('notesPanel');
    panel.classList.toggle('visible', this.notesVisible);
  }

  updateNotes() {
    const notesContent = document.getElementById('notesContent');
    const note = presenterNotes[this.currentSlide] || "No notes for this slide.";
    notesContent.innerHTML = `<p>${note}</p>`;
  }

  setupEventListeners() {
    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => this.previousSlide());
    document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());
    document.getElementById('notesToggle').addEventListener('click', () => this.toggleNotes());
    document.querySelector('.close-notes').addEventListener('click', () => this.toggleNotes());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.previousSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.showSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.showSlide(this.totalSlides);
      } else if ((e.key === 'n' || e.key === 'N') && this.isPresenterMode) {
        e.preventDefault();
        this.toggleNotes();
      }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    });
  }

  handleSwipe(startX, endX) {
    if (endX < startX - 50) this.nextSlide();
    if (endX > startX + 50) this.previousSlide();
  }
}

// Initialize presentation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.presentation = new Presentation();
});
