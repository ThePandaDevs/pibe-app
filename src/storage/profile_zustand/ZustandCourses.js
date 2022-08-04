import create from 'zustand';

export const useStoreCourses = create((set, get) => ({
	formInput: [],
	objectData: {
		name: '',
		hours: 0,
        trainingInstitution: '',
        dateRealization: '',
	},
	addForm: () => set({ formInput: [...get().formInput, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInput.length > 1) {
			let values = [...get().formInput];
			values.splice(pos, 1);
			set({ formInput: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInput.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInput: newData });
	},
}));