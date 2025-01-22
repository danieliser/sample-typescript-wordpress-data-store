import type { Context, BaseEntityRecords } from '@wordpress/core-data';

/**
 * Declare a custom post type for custom post type.
 */
declare module '@wordpress/core-data' {
	export namespace BaseEntityRecords {
		export interface MyCustomType< C extends Context >
			extends BaseEntity< C > {
			/**
			 * Custom uuid field.
			 */
			uuid: string;
			/**
			 * Custom settings field.
			 */
			settings: MyCustomTypeSettings;
		}
	}
}

/**
 * The settings for a your custom type.
 */
export type MyCustomTypeSettings = {
	/**
	 * Custom type setting field.
	 */
	type: string;
	/**
	 * Custom url setting field.
	 */
	url?: string;
};

/**
 * The your custom type interface.
 */
export interface MyCustomType< C extends Context = 'view' >
	extends BaseEntityRecords.MyCustomType< C > {}

/**
 * The statuses for a your custom type.
 */
export type MyCustomTypeStatuses = MyCustomType[ 'status' ] | 'all';
