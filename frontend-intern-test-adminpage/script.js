document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Save theme preference to localStorage
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('darkTheme') === 'true') {
        body.classList.add('dark-theme');
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const mainHeader = document.querySelector('.main-header');
    mainHeader.insertBefore(mobileMenuToggle, mainHeader.firstChild);
    
    const sidebar = document.querySelector('.sidebar');
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // Initialize charts
    initCharts();
    
    // Generate dummy data for charts
    function generateData(count, min, max) {
        let data = [];
        let lastValue = Math.floor(Math.random() * (max - min + 1) + min);
        
        for (let i = 0; i < count; i++) {
            let change = Math.floor(Math.random() * 20) - 10;
            let newValue = lastValue + change;
            
            if (newValue < min) newValue = min;
            if (newValue > max) newValue = max;
            
            data.push(newValue);
            lastValue = newValue;
        }
        
        return data;
    }
    
    function initCharts() {
        // User Growth Chart
        const userGrowthCtx = document.getElementById('userGrowthChart').getContext('2d');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const userData = generateData(12, 2000, 5000);
        
        new Chart(userGrowthCtx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'New Users',
                    data: userData,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#4361ee',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: 'var(--text-tertiary)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'var(--text-tertiary)'
                        }
                    }
                }
            }
        });
        
        // Transactions Chart
        const transactionsCtx = document.getElementById('transactionsChart').getContext('2d');
        const transactionData = generateData(12, 500, 2500);
        
        new Chart(transactionsCtx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Transactions',
                    data: transactionData,
                    backgroundColor: 'rgba(67, 97, 238, 0.7)',
                    borderColor: '#4361ee',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: 'var(--text-tertiary)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'var(--text-tertiary)'
                        }
                    }
                }
            }
        });
    }
    
    // Simulate theme change event for charts
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                body.dispatchEvent(new Event('themeChanged'));
            }
        });
    });
    
    observer.observe(body, {
        attributes: true
    });
});