import type { PageServerLoad } from './$types';
import type { DeckJSON } from '$lib/types';
import deckData from '$lib/data/naomi-sharon-ovo-deck.json';

export const load: PageServerLoad = async () => {
	return { deck: deckData as DeckJSON };
};
