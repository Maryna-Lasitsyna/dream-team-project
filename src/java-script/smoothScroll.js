// Находим все ссылки с якорями на странице
const links = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик клика для каждой ссылки
links.forEach(link => {
  link.addEventListener('click', e => {
    // Отменяем стандартное поведение ссылки
    e.preventDefault();

    // Находим целевой элемент, к которому нужно прокрутить страницу
    const target = document.querySelector(link.getAttribute('href'));

    // Находим расстояние, на которое нужно прокрутить страницу
    const scrollTop = target.getBoundingClientRect().top;

    // Вычисляем продолжительность анимации в зависимости от расстояния, на которое нужно прокрутить страницу
    const duration = Math.abs(scrollTop) / 7;

    // Функция, которая будет вызываться каждый кадр анимации
    function step(timestamp) {
      // Если временная метка не задана, задаем ее равной текущему времени
      if (!step.start) {
        step.start = timestamp;
      }

      // Вычисляем, сколько времени прошло с начала анимации
      const elapsed = timestamp - step.start;

      // Вычисляем, насколько нужно прокрутить страницу в текущий момент времени
      const progress = Math.min(elapsed / duration, 1);
      const scrollTopNow = Math.round(scrollTop * progress);

      // Прокручиваем страницу к целевому элементу
      window.scrollTo(0, scrollTopNow);

      // Если анимация не закончилась, продолжаем анимировать
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    // Запускаем анимацию
    window.requestAnimationFrame(step);
  });
});
