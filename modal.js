document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "Boyacá": {
            habitantes: "1,200,000",
            especies: "3,500",
            flora: "2,300",
            fauna: "1,200"
        },
        "Cundinamarca": {
            habitantes: "2,800,000",
            especies: "4,000",
            flora: "2,500",
            fauna: "1,500"
        }
    };

    const tooltip = document.getElementById('tooltip');

    document.querySelectorAll('.land').forEach(function(element) {
        element.addEventListener('mouseover', function(event) {
            const department = event.target.getAttribute('title');
            const departmentData = data[department];

            if (departmentData) {
                tooltip.innerHTML = `
                    <strong>${department}</strong><br>
                    Habitantes: ${departmentData.habitantes}<br>
                    Especies: ${departmentData.especies}<br>
                    Flora: ${departmentData.flora}<br>
                    Fauna: ${departmentData.fauna}
                `;
                tooltip.style.display = 'block';
            }
        });

        element.addEventListener('mousemove', function(event) {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });

        element.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});
