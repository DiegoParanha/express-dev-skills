const skills = [
    {id: 1, skill: 'Front end Developing', learned: false},
    {id: 2, skill: 'Back end Developing', learned: false},
    {id: 3, skill: 'Typing 100 WPM', learned: true},
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills;
}