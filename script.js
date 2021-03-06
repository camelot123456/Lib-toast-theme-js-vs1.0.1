function toast({
			title = '', 
			message = '', 
			type = 'success', 
			duration = 3000
		}) {
			const main = document.getElementById('toast');



			if (main) {
				const toast = document.createElement('div');

				//auto remove toast
				const autoRemoveId = setTimeout(function() {
					main.removeChild(toast);
				}, duration + 1000);
				//remove toast when click
				toast.onclick = function(e) {
					if (e.target.closest('.toast__close')) {
						main.removeChild(toast);
						clearTimeout(autoRemoveId);
					}
				}

				const icons = {
					success: 'fa fa-check-circle',
					warning: 'fa fa-exclamation-circle',
					error: 'fa fa-check-circle'
				};
				const icon = icons[type];
				const delay = (duration / 1000).toFixed(2);


				toast.classList.add('toast', `toast--${type}`);
				toast.style.animation = `slideLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

				toast.innerHTML = `
					<div class="toast__icon">
						<i class="${icon}" aria-hidden="true"></i>
					</div>
					<div class="toast__body">
						<h3 class="toast__title">${title}</h3>
						<p class="toast__msg">${message}</p>
					</div>
					<div class="toast__close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</div>
				`
				main.appendChild(toast);

				
			}
		}