const { Flashcard } = require('../models/flashcard');

const resolvers = {
   // we provide a function that takes the same parameters (as the corresponding query/mutation)
   // and uses them in Mongoose database manipulation functions.
    Query: {
        async getFlashcard(_, {_id}){
            try {
                return await Flashcard.findById(_id);
              } catch (error) {
                console.error('Error fetching flashcard by ID:', error);
                throw new Error('Error fetching flashcard');
              }
        },
        async allFlashcards(){
            try {
                return await Flashcard.find();
              } catch (error) {
                console.error('Error fetching all flashcards:', error);
                throw new Error('Error fetching flashcards');
              }
            },
            
    },
    Mutation: {
        async createFlashcard(_, {input}){
            try {
                return await Flashcard.create(input);
              } catch (error) {
                console.error('Error creating flashcard:', error);
                throw new Error('Error creating flashcard');
              }
        },
        async updateFlashcard(_, {_id, input}){
            try {
                return await Flashcard.findOneAndUpdate({ _id }, input, { new: true });
              } catch (error) {
                console.error('Error updating flashcard:', error);
                throw new Error('Error updating flashcard');
              }
        },
        async deleteFlashcard(root, {_id}){
            try {
                return await Flashcard.findOneAndRemove({ _id });
              } catch (error) {
                console.error('Error deleting flashcard:', error);
                throw new Error('Error deleting flashcard');
              }
            },
        },

};

module.exports = resolvers;