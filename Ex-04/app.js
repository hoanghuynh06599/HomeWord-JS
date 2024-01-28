const handleChangeLight = ({lightValue}) => {
    const lights = document.querySelectorAll('#light');

    lights.forEach(light => {
        if(light.getAttribute('data-light') === lightValue) {
            if(Array.from(light.classList).includes('opacity-20')) {
                light.classList.remove('opacity-20');
            }
        } else {
            light.classList.add('opacity-20');
        }
    })
}