import catalogJson from '../catalog';

export default defineEventHandler(() => {
    return {
        catalog: catalogJson,
    };
});
