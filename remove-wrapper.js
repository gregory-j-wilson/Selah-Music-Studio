function unwrapAndRemoveWrappers() {
    if (window.innerWidth <= 830) {
        document.querySelectorAll('.wrapper').forEach(wrapper => {
            const parent = wrapper.parentNode;

            // Move all children (the content) out of the wrapper
            while (wrapper.firstChild) {
                parent.insertBefore(wrapper.firstChild, wrapper);
            }

            // Now safely remove the empty wrapper
            parent.removeChild(wrapper);
        });
    }
}

document.addEventListener('DOMContentLoaded', unwrapAndRemoveWrappers);
window.addEventListener('resize', unwrapAndRemoveWrappers);
