function toggleSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}

function toggleSubSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll("#textAnimation p");
  
    paragraphs.forEach(function(paragraph, index) {
      setTimeout(function() {
        paragraph.style.opacity = 1;
      }, index * 5000); 
    });

    
    
    
        const ctx1 = document.getElementById('chart1').getContext('2d');
        const chart1 = new Chart(ctx1, {
            type: 'bar', 
            data: {
                labels: ['Prova 1', 'Prova 2', 'Prova 3', 'Prova 4', 'Prova 5', 'Prova 6', 'Prova 7', 'Prova 8', 'Prova 9', 'Prova 10', 'Prova 11', 'Prova 12'],
                datasets: [
                    {
                        label: 'Acertos G',
                        data: [10, 14, 17, 20, 22, 25, 27, 30, 32, 34, 37, 40],
                        backgroundColor: '#FA5882',
                        borderColor: '#B40431',
                        borderWidth: 1
                    },
                    {
                        label: 'Acertos P2',
                        data: [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9],
                        backgroundColor: '#F7819F',
                        borderColor: '#FF0080',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                                color: 'white' 
                            
                        }
                    },
                    title: {
                        display: true,
                        text: 'Índice de Desempenho Específico - Acertos (Gerais e P2)',
                        color: 'white' 
                    
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'white' 
                        }
                    },
                    y: {
                        ticks: {
                            color: 'white' 
                        }
                    }
                }
            }
        });
    
        const ctx2 = document.getElementById('chart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
            type: 'line', 
            data: {
                labels: ['Prova 1', 'Prova 2', 'Prova 3', 'Prova 4', 'Prova 5', 'Prova 6', 'Prova 7', 'Prova 8', 'Prova 9', 'Prova 10', 'Prova 11', 'Prova 12'],
                datasets: [{
                    label: 'Pontos',
                    data: [18, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80, 90, 100],
                    fill: false,
                    borderColor: '#B4045F',
                    pointBackgroundColor: '#F7819F',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                                color: 'white'
                            
                        }
                    },
                    title: {
                        display: true,
                        text: 'Índice de Desempenho Específico - Redação',
                            color: 'white' 
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'white' 
                        }
                    },
                    y: {
                        ticks: {
                            color: 'white' 
                        }
                    }
                }
            }
        });
    });
    
    