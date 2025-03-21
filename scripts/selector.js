const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear}`;

const courses = [
    {
        subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'], completed: false
    },
    {
        subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'], completed: false
    },
    {
        subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'], completed: false
    },
    {
        subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'], completed: false
    },
    {
        subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
        technology: ['HTML', 'CSS', 'JavaScript'], completed: false
    },
    {
        subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
        technology: ['HTML', 'CSS', 'JavaScript'], completed: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.course-button .course');
    const listContainer = document.querySelector('.list ul');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const courseCode = button.textContent.split(' '); 
            const subject = courseCode[0];
            const number = parseInt(courseCode[1]);
            
            const course = courses.find(c => c.subject === subject && c.number === number);
            
            if (course) {
                listContainer.innerHTML = `
                    <li><strong>Title:</strong> ${course.title}</li>
                    <li><strong>Credits:</strong> ${course.credits}</li>
                    <li><strong>Certificate:</strong> ${course.certificate}</li>
                    <li><strong>Description:</strong> ${course.description}</li>
                    <li><strong>Technologies:</strong> ${course.technology.join(', ')}</li>
                `;
            }
        });
    });
});

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

