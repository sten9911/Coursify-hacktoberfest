let courses_list = document.querySelector(".courses__list");

data.forEach((course) => {
  $(".courses__list").append(`
  <div class="courses__card">
          <img
            src="./courses/images/${course.image}"
            alt="Course Image"
            class="course__image"
            onerror="this.onerror=null; this.src='./assets/images/default.png'"
          />

          <div class="course__info">
            <div class="course__tags">
            ${course.tags
              .map((tag) => `<div class="course__tag">${tag}</div>`)
              .join("")}
            </div>
            <div class="course__name">${course.name}</div>
            <div class="course__instructor">${course.instructor}</div>
            <div class="course__description">
              ${course.description.substring(0, 100)}..
            </div>
            <a target="_blank" class="course__call_to_action" href="${
              course.url
            }"> Learn More </a>
          </div>
          
        </div>
  `);
});
