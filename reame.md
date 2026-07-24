# 🍽️ Restaurant Website

A modern, responsive restaurant website built with **Django**, featuring a stunning dark theme, dynamic menu system, online reservations, and beautiful animations.

![Django](https://img.shields.io/badge/Django-5.0-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📸 Screenshots

### 🏠 Home Page
> Beautiful hero section with animated elements and featured dishes

### 📋 Menu Page  
> Interactive menu with filtering, search, and shopping cart

### 📸 Gallery Page
> Masonry gallery with lightbox and category filters

### 📞 Contact Page
> Reservation form with real-time validation

---

## ✨ Features

### 🎨 Design
- ✅ **Dark Mode Theme** - Sleek and modern dark UI
- ✅ **Fully Responsive** - Works on all devices
- ✅ **Smooth Animations** - Beautiful transitions and effects
- ✅ **Modern Typography** - Poppins + Playfair Display fonts
- ✅ **Custom Scrollbar** - Themed scrollbar design

### 🏠 Home Page
- ✅ Hero section with parallax background
- ✅ Featured dishes showcase
- ✅ About section with animated stats
- ✅ Customer testimonials
- ✅ Call-to-action sections

### ℹ️ About Page
- ✅ Restaurant story with timeline
- ✅ Team members showcase
- ✅ Core values display
- ✅ Animated counters
- ✅ Chef profiles

### 📋 Menu Page
- ✅ **Category filtering** (Breakfast, Lunch, Dinner, Dessert, Drinks)
- ✅ **Live search** functionality
- ✅ **Shopping cart** with sidebar
- ✅ **Quick view modal** for dishes
- ✅ **Add to cart** with notifications
- ✅ Ratings and prep time display

### 📸 Gallery Page
- ✅ Masonry grid layout
- ✅ Category filters
- ✅ **Lightbox** with navigation
- ✅ Keyboard navigation (Arrow keys, ESC)
- ✅ Touch swipe support (mobile)
- ✅ Load more functionality

### 📞 Contact Page
- ✅ **Reservation form** with validation
- ✅ Real-time form validation
- ✅ Character counter
- ✅ Google Maps integration
- ✅ Newsletter subscription
- ✅ **FAQ accordion**
- ✅ Social media links


---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Backend** | Django 5.0, Python 3.11+ |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Database** | SQLite (default) |
| **Icons** | Font Awesome 6.4 |
| **Fonts** | Google Fonts (Poppins, Playfair Display) |
| **Version Control** | Git |

---

## 📁 Project Structure

```
restaurant_project/
│
├── manage.py
├── db.sqlite3
├── requirements.txt
├── README.md
├── download_images.py         # Auto-download images script
│
├── restaurant/                # Main project folder
│   ├── __init__.py
│   ├── settings.py           # Django settings
│   ├── urls.py               # Main URL routing
│   ├── wsgi.py
│   └── asgi.py
│
├── website/                  # Main app
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py              # View functions
│   ├── urls.py               # App URLs
│   └── migrations/
│
├── templates/                # HTML templates
│   ├── base.html            # Base template
│   ├── home.html            # Home page
│   ├── about.html           # About page
│   ├── menu.html            # Menu page
│   ├── gallery.html         # Gallery page
│   ├── contact.html         # Contact page
│   └── partials/
│       ├── header.html      # Navigation header
│       └── footer.html      # Footer
│
└── static/                   # Static files
    ├── css/
    │   ├── base.css         # Global styles
    │   ├── navbar.css       # Navigation styles
    │   ├── footer.css       # Footer styles
    │   ├── home.css         # Home page styles
    │   ├── about.css        # About page styles
    │   ├── menu.css         # Menu page styles
    │   ├── gallery.css      # Gallery page styles
    │   ├── contact.css      # Contact page styles
    │
    ├── js/
    │   ├── base.js          # Global scripts
    │   ├── navbar.js        # Navigation scripts
    │   ├── footer.js        # Footer scripts
    │   ├── home.js          # Home page scripts
    │   ├── about.js         # About page scripts
    │   ├── menu.js          # Menu page scripts
    │   ├── gallery.js       # Gallery page scripts
    │   ├── contact.js       # Contact page scripts
    │
    └── images/              # All images
        ├── hero-bg.jpg
        ├── logo.png
        ├── dish1.jpg
        └── gallery/
```

---

## 🚀 Installation & Setup

### 📋 Prerequisites

- Python 3.11 or higher
- pip (Python package manager)
- Git (optional)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/restaurant-website.git
cd restaurant-website
```

### 2️⃣ Create Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

**Or install Django directly:**
```bash
pip install django
```

### 4️⃣ Download Images (Optional)

Run the auto-download script:
```bash
python download_images.py
```

This downloads all 42 restaurant images automatically! 🎉

### 5️⃣ Run Migrations

```bash
python manage.py migrate
```

### 6️⃣ Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 7️⃣ Run Development Server

```bash
python manage.py runserver
```

### 8️⃣ Open in Browser

Visit: **http://127.0.0.1:8000/**

---

## 🎯 URL Routes

| URL         | Page    | Description |
|-------------|---------|-------------|
| `/`         | Home    | Landing page |
| `/home/`    | Home    | Home page |
| `/about/`   | About   | About the restaurant |
| `/menu/`    | Menu    | Food menu |
| `/gallery/` | Gallery | Photo gallery |
| `/contact/` | Contact | Contact form |
| `/admin/`   | Admin   | Django admin panel |

---

## ⚙️ Configuration

### 🔧 Environment Variables

Create `.env` file in root:
```env
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
```

### 🎨 Customize Colors

Edit `static/css/base.css`:
```css
:root {
    --primary-color: #ff6b35;      /* Change primary color */
    --primary-dark: #e85a24;       /* Darker shade */
    --bg-dark: #0f0f0f;            /* Background color */
    --text-white: #ffffff;         /* Text color */
}
```

### 📸 Change Images

Place your images in `static/images/`:
- `hero-bg.jpg` - Homepage hero background
- `logo.png` - Restaurant logo
- `dish1.jpg`, `dish2.jpg`, `dish3.jpg` - Featured dishes
- `about.jpg` - About section image

---

## 🎨 Features Explained

### 🌙 Dark Mode
The entire website uses a **modern dark theme** with:
- Deep black backgrounds
- Orange accent colors (#ff6b35)
- Smooth gradient effects
- Glowing highlights

### 🛒 Shopping Cart (Menu Page)
- Add items with animation
- Update quantities
- Remove items
- Real-time total calculation
- Persistent during navigation

### 🔍 Search & Filter
- **Menu:** Filter by category + live search
- **Gallery:** Filter by type (Food, Interior, Team, Events)
- **404:** Search redirects to correct page

### ✅ Form Validation
- Real-time validation
- Error messages
- Success states
- Character counters
- Email format checking

### 🎬 Animations
- Fade-in on scroll
- Hover effects
- Parallax scrolling
- Smooth transitions
- Loading animations

---

## 📱 Responsive Design

The website is fully responsive across:

| Device | Breakpoint |
|--------|-----------|
| 🖥️ Desktop | 1200px+ |
| 💻 Laptop | 992px - 1199px |
| 📱 Tablet | 768px - 991px |
| 📱 Mobile | 480px - 767px |
| 📱 Small Mobile | < 480px |

---

## 🎯 Usage Examples

### Adding a New Menu Item

Edit `templates/menu.html`:
```html
<div class="menu-card" data-category="lunch">
    <div class="menu-card-image">
        <img src="{% static 'images/new-dish.jpg' %}" alt="New Dish">
        <span class="menu-badge popular">Popular</span>
    </div>
    <div class="menu-card-body">
        <h3>Dish Name</h3>
        <p>Description here...</p>
        <div class="menu-card-footer">
            <span class="price">$12.99</span>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    </div>
</div>
```

### Adding a New Page

1. **Create template:** `templates/new_page.html`
2. **Add view:** `website/views.py`
```python
def new_page(request):
    return render(request, 'new_page.html')
```
3. **Add URL:** `website/urls.py`
```python
path('new-page/', views.new_page, name='new_page'),
```

---

## 🐛 Troubleshooting

### Static files not loading?
```bash
python manage.py collectstatic
```

### Template not found?
Check `settings.py`:
```python
TEMPLATES = [{
    'DIRS': [BASE_DIR / 'templates'],  # ✅ Must be lowercase
}]
```

### 404 page not showing?
Make sure in `settings.py`:
```python
DEBUG = True  # For development
```

And in main `urls.py`:
```python
handler404 = 'website.views.custom_404_view'
```

### Images not showing?
Run the download script:
```bash
python download_images.py
```

---

## 📊 Performance

- ⚡ **Fast loading** - Optimized CSS/JS
- 🎨 **Lazy loading** - Images load on demand
- 📦 **Minimal dependencies** - Only Django required
- 🚀 **Cached static files** - Faster repeat visits

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🟠 Primary Orange | `#ff6b35` | Buttons, accents |
| 🟠 Dark Orange | `#e85a24` | Hover states |
| 🟠 Light Orange | `#ff8555` | Gradients |
| ⚫ Black | `#0f0f0f` | Backgrounds |
| ⚫ Card Black | `#1a1a1a` | Card backgrounds |
| ⚪ White | `#ffffff` | Text |
| ⚪ Gray Light | `#e0e0e0` | Secondary text |
| ⚪ Gray Muted | `#a0a0a0` | Muted text |

---

## 📝 Requirements

Create `requirements.txt`:
```txt
Django>=5.0
Pillow>=10.0.0
```

---

## 🚀 Deployment

### Deploy to PythonAnywhere

1. Upload your code
2. Setup virtual environment
3. Install requirements
4. Configure static files
5. Update WSGI file

### Deploy to Heroku

```bash
# Install Heroku CLI
heroku create your-app-name
git push heroku main
heroku run python manage.py migrate
```

### Deploy to Vercel

1. Install Vercel CLI
2. Create `vercel.json`
3. Deploy: `vercel --prod`

---

## 🔒 Security

For production, remember to:
- ✅ Set `DEBUG = False`
- ✅ Use strong `SECRET_KEY`
- ✅ Configure `ALLOWED_HOSTS`
- ✅ Use HTTPS
- ✅ Enable CSRF protection
- ✅ Use environment variables

---

## 🎯 Roadmap

### Upcoming Features:
- [ ] User authentication (Login/Signup)
- [ ] Online payment integration
- [ ] Order tracking system
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Blog section
- [ ] Multi-language support
- [ ] Table reservation calendar
- [ ] Customer reviews system
- [ ] Loyalty program

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- 🌐 Website: [yourwebsite.com](https://yourwebsite.com)
- 📧 Email: your.email@example.com
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- 🎨 **Design Inspiration** - Modern restaurant websites
- 📸 **Images** - [Unsplash](https://unsplash.com)
- 🎨 **Icons** - [Font Awesome](https://fontawesome.com)
- 🔤 **Fonts** - [Google Fonts](https://fonts.google.com)
- 📚 **Django Documentation** - [djangoproject.com](https://djangoproject.com)

---

## 📞 Support

If you have any questions or issues:

- 🐛 **Report Bug:** [Create an Issue](https://github.com/yourusername/restaurant-website/issues)
- 💡 **Suggest Feature:** [Feature Request](https://github.com/yourusername/restaurant-website/issues)
- 📧 **Email:** your.email@example.com

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/restaurant-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/restaurant-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/restaurant-website)
![GitHub license](https://img.shields.io/github/license/yourusername/restaurant-website)

---

<div align="center">

### 🍽️ Made with ❤️ and lots of ☕

**⭐ Star this repo if you found it helpful! ⭐**

</div>