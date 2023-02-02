const skills = [
    {id: 135799, skill: 'Front end Developing', learned: false},
    {id: 246805, skill: 'Back end Developing', learned: false},
    {id: 357734, skill: 'Typing 100 WPM', learned: true},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill) {
    skill.id = Date.now() % 100000
    skill.learned = false;
    skills.push(skill);
};


function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills;
}