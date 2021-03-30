/**
 * Add comments array to person objects
 * @param {Object[]} arrayOfObjects - Array of people
 * @param {Object} person - Person object
 *
 * @throws - Will throw an error if arg is missing or invalid
 *
 * @returns {Object[]} - Array person objects with empty comment arrays
 */

export const addCommentsAndIdFields = arrayOfObjects => {
	if (!arrayOfObjects || !Array.isArray(arrayOfObjects))
		throw new Error('Can\'t add checkboxes, array of employee objects is missing.')

	for (let item of arrayOfObjects) {
		item.comments = [],
		item.id = generateSimpleID()
	}
	return arrayOfObjects
}

/**
 * Generate simple id
 *
 * @returns {string} - ID
 */

export const generateSimpleID = () => window.URL.createObjectURL(new Blob([])).substring(31)
