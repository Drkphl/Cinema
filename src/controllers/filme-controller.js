import Filme from '/home/usuario082/Documentos/MongoDB/Cinema/src/models/filme-model.js';

export const store = async (req, res) => {
    try {
        const content = await Filme.Create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const index = async (req, res) => {
    try {
        const content = await Filme.Find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const show = async (req, res) => {
    try {
        const content = await Filme.FindById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const update = async (req, res) => {
    try {
        const content = await Filme.FindByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const destroy = async (req, res) => {
    try {
        const content = await Filme.FindByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
