
   const mode = document.getElementById('mode');
   if (localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
    }
    mode.addEventListener('click', function () {
        if (this.classList.contains('fa-sun')) {
            document.documentElement.setAttribute('data-theme', 'light');
            this.classList.remove('fa-sun');
            this.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else if (this.classList.contains('fa-moon')) {
            document.documentElement.setAttribute('data-theme', 'dark');
this.classList.remove('fa-moon');
this.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } 
      
    });