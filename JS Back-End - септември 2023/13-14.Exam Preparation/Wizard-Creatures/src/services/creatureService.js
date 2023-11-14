const Creature = require("./../models/Creature");

exports.create = (createData) => Creature.create(createData);

exports.getAll = () => Creature.find();

exports.getSingleCreature = (creatureId) => Creature.findById(creatureId).populate("votes");

exports.update = (creatureId, createData) => Creature.findByIdAndUpdate(creatureId, createData);

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.getMyCreatures = (ownerId) => Creature.find({ owner: ownerId }).populate("owner");

exports.addVotesToCreature = async (creatureId, userId) => {
  const creature = await this.getSingleCreature(creatureId);
  const isExtistingVotes = creature.votes.some((v) => v?.toString() === userId);

  if (isExtistingVotes) {
    return;
  }

  creature.votes.push(userId);
  return creature.save();
};
