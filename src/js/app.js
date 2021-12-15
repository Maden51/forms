document.addEventListener('click', (e) => {
  e.preventDefault();
  const button = document.querySelector('.btn');

  const popoverIn = document.querySelector('.popover');
  if (popoverIn) {
    button.removeChild(popoverIn);
  } else {
    const popover = document.createElement('div');
    popover.classList.add('popover');
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    const popoverTitle = document.createElement('h3');
    popoverTitle.classList.add('popover-header');
    popoverTitle.textContent = 'PopoverTitle';
    const popoverBody = document.createElement('div');
    popoverBody.classList.add('popover-body');
    popoverBody.textContent = 'And here is some amazing content! It is very engaging. Right?';
    popover.appendChild(arrow);
    popover.appendChild(popoverTitle);
    popover.appendChild(popoverBody);
    button.appendChild(popover);

    popover.style.top = `${0 - popover.offsetHeight - 10}px`;
    popover.style.left = '0px';
    arrow.style.left = `${popover.offsetWidth / 2 - arrow.offsetWidth / 2}px`;
  }
});
