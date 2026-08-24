import { content, type Locale } from '../data/content';
import { initLoader } from './loader';

const localeStorageKey = 'engaher-locale';

function getNestedValue(locale: Locale, path: string): string | undefined {
	let value: unknown = content[locale];

	for (const segment of path.split('.')) {
		if (typeof value !== 'object' || value === null) return undefined;
		value = (value as Record<string, unknown>)[segment];
	}

	return typeof value === 'string' ? value : undefined;
}

function getInitialLocale(): Locale {
	const queryLocale = new URLSearchParams(window.location.search).get('lang');
	if (queryLocale === 'es' || queryLocale === 'en') return queryLocale;

	try {
		const storedLocale = window.localStorage.getItem(localeStorageKey);
		if (storedLocale === 'es' || storedLocale === 'en') return storedLocale;
	} catch {
		// Storage can be unavailable in private browsing contexts.
	}

	return 'es';
}

function updateLocale(locale: Locale, persist = true) {
	document.documentElement.lang = locale;
	document.documentElement.dataset.locale = locale;

	document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
		const key = element.dataset.i18n;
		if (!key) return;

		const value = getNestedValue(locale, key);
		if (value !== undefined) element.textContent = value;
	});

	document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((element) => {
		const descriptors = element.dataset.i18nAttr?.split(';') ?? [];

		descriptors.forEach((descriptor) => {
			const separator = descriptor.indexOf(':');
			if (separator === -1) return;

			const attribute = descriptor.slice(0, separator);
			const key = descriptor.slice(separator + 1);
			const value = getNestedValue(locale, key);
			if (value !== undefined) element.setAttribute(attribute, value);
		});
	});

	document.querySelectorAll<HTMLButtonElement>('[data-locale-toggle]').forEach((button) => {
		const isActive = button.dataset.localeToggle === locale;
		button.setAttribute('aria-pressed', String(isActive));
	});

	const strings = content[locale];
	document.title = strings.meta.title;
	document.querySelector('[data-meta-description]')?.setAttribute('content', strings.meta.description);
	document.querySelector('[data-meta-title]')?.setAttribute('content', strings.meta.title);
	document.querySelector('[data-meta-og-description]')?.setAttribute('content', strings.meta.description);
	document.querySelector('[data-meta-locale]')?.setAttribute('content', locale === 'es' ? 'es_MX' : 'en_US');

	if (persist) {
		try {
			window.localStorage.setItem(localeStorageKey, locale);
		} catch {
			// Storage is an enhancement, not a requirement for the switcher.
		}
	}

	const url = new URL(window.location.href);
	if (locale === 'en') {
		url.searchParams.set('lang', 'en');
	} else {
		url.searchParams.delete('lang');
	}
	window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);

	document.dispatchEvent(new CustomEvent('localechange', { detail: locale }));
}

function initLocale() {
	const initialLocale = getInitialLocale();
	updateLocale(initialLocale, false);

	document.querySelectorAll<HTMLButtonElement>('[data-locale-toggle]').forEach((button) => {
		button.addEventListener('click', () => {
			const locale = button.dataset.localeToggle;
			if (locale === 'es' || locale === 'en') updateLocale(locale);
		});
	});
}

function initMenu() {
	const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
	const navigation = document.querySelector<HTMLElement>('[data-mobile-nav]');
	if (!toggle || !navigation) return;

	const closeMenu = () => {
		toggle.setAttribute('aria-expanded', 'false');
		navigation.dataset.open = 'false';
	};

	toggle.addEventListener('click', () => {
		const isOpen = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', String(!isOpen));
		navigation.dataset.open = String(!isOpen);
	});

	navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeMenu();
	});
}

function initPrint() {
	document.querySelectorAll<HTMLButtonElement>('[data-print]').forEach((button) => {
		button.addEventListener('click', () => window.print());
	});
}

export function initApp() {
	if (document.documentElement.dataset.appReady === 'true') return;
	document.documentElement.dataset.appReady = 'true';

	initLoader();
	initLocale();
	initMenu();
	initPrint();
}
