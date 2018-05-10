module.exports = (sequelize, DataTypes) => {
  return sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    listing: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    on_hand: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    background: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    additional1: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    additional2: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    additional3: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    additional4: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    manufacturer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    manufacturing_cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    fabric_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fabric_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    fabric_note: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    colour: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    handle: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'hidden',
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    collar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cuffs: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    placket: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    zoomed: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fabric_supplier_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    rop_note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_draft: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fabric_alias: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lookbooks_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    tagline: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    front: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    formalness: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    casualness: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    released_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    standard_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    fabric_quality_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    vendor_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    string_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    options_json: {
      type: DataTypes.STRING(8191),
      allowNull: true,
    },
    manufactured_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    timestamps: false,
    tableName: 'products',
  });
};
