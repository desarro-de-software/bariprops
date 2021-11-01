module.exports = (Connection) => {
  const user = require("./User");
  const category = require("./Category");
  const property = require("./Property");
  const favorite = require("./Favorite");
  const message = require("./Message");
  const type = require("./Type");
  const status = require("./Status");
  const photo = require("./Photo");
  const chat = require("./Chat");

  const userModel = user(Connection);
  const favoriteModel = favorite(Connection);
  const messageModel = message(Connection);
  const propertyModel = property(Connection);
  const categoryModel = category(Connection);
  const typeModel = type(Connection);
  const statusModel = status(Connection);
  const photoModel = photo(Connection);
  const chatModel = chat(Connection);

  propertyModel.belongsTo(categoryModel, {
    foreignKey: "category_id",
    onDelete: "SET NULL"
  });
  propertyModel.belongsTo(userModel, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
  });
  propertyModel.hasOne(statusModel, {
    foreignKey: "status_id",
    onDelete: "RESTRICT"
  });
  messageModel.belongsTo(userModel, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
  });
  messageModel.belongsTo(chatModel, {
    foreignKey: "chat_id",
    onDelete: "CASCADE"
  });
  userModel.hasMany(favoriteModel, {
    foreignKey: "favorite_id",
    onDelete: "SET NULL"
  });
  favoriteModel.belongsTo(propertyModel, {
    foreignKey: "property_id",
    onDelete: "CASCADE"
  });
  chatModel.belongsTo(propertyModel, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
  });
  photoModel.belongsTo(propertyModel, {
    foreignKey: "property_id",
    onDelete: "CASCADE"
  });

  return {
    User: userModel,
    Category: categoryModel,
    Property: propertyModel,
    Favorite: favoriteModel,
    Message: messageModel,
    Type: typeModel,
    Status: statusModel,
    Photo: photoModel,
    Chat: chatModel
  };
};
