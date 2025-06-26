document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
    });
    
    if (localStorage.getItem('darkTheme') === 'true') {
        body.classList.add('dark-theme');
    }
    
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const mainHeader = document.querySelector('.main-header');
    mainHeader.insertBefore(mobileMenuToggle, mainHeader.firstChild);
    
    const sidebar = document.querySelector('.sidebar');
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    initCharts();
    
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