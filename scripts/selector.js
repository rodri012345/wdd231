const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear}`;


const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modification: ${lastModified}`;

function filterCourses(category) {
    const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        if (category === 'all') {
            course.classList.remove('hidden');
        } else {
            course.classList.toggle('hidden', !course.classList.contains(category));
        }
    });
}

