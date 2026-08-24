import { gsap } from 'gsap';
import { content, type Locale } from '../data/content';

function getUserAgentLocale(): Locale {
	const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
	const preferredLanguage = languages.find((language) => /^(en|es)(-|$)/i.test(language));

	return preferredLanguage?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function initLoader() {
	const loader = document.querySelector<HTMLElement>('[data-loader]');
	if (!loader) return;
	loader.dataset.js = 'true';

	const locale = getUserAgentLocale();
	const copy = content[locale].loader;
	const role = loader.querySelector<HTMLElement>('[data-loader-role]');
	const eyebrow = loader.querySelector<HTMLElement>('[data-loader-eyebrow]');
	const status = loader.querySelector<HTMLElement>('[data-loader-status]');

	if (role) role.textContent = copy.role;
	if (eyebrow) eyebrow.textContent = copy.eyebrow;
	if (status) status.textContent = copy.status;
	loader.setAttribute('aria-label', copy.label);
	loader.lang = locale;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		loader.hidden = true;
		return;
	}

	const progress = { value: 0 };
	const ctx = gsap.context(() => {
		const timeline = gsap.timeline({
			defaults: {
				ease: 'power3.out',
			},
			onComplete: () => {
				loader.hidden = true;
			},
		});

		timeline
			.from('[data-loader-eyebrow]', {
				autoAlpha: 0,
				y: 12,
				duration: 0.35,
			})
			.from(
				'[data-loader-name], [data-loader-role]',
				{
					yPercent: 110,
					duration: 0.65,
					stagger: 0.08,
				},
				'-=0.1',
			)
			.to(
				progress,
				{
					value: 100,
					duration: 0.75,
					ease: 'power1.inOut',
					onUpdate: () => {
						const progressElement = loader.querySelector<HTMLElement>('[data-loader-progress]');
						if (progressElement) progressElement.textContent = `${Math.round(progress.value)}%`;
					},
				},
				'-=0.1',
			)
			.to('[data-loader-progress-bar]', { scaleX: 1, duration: 0.75 }, '<')
			.to('[data-loader-content]', { autoAlpha: 0, y: -14, duration: 0.35 }, '+=0.12')
			.to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 0.7 }, '-=0.05');
	}, loader);

	return () => ctx.revert();
}
