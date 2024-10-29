package easydept.edbackend.services;

import easydept.edbackend.entity.Expensas;
import easydept.edbackend.repositories.ExpensasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExpensasService {
    private final ExpensasRepository expensasRepository;

    @Autowired
    public ExpensasService(ExpensasRepository expensasRepository) {
        this.expensasRepository = expensasRepository;
    }

    public List<Expensas> getAllExpensas() {
        return expensasRepository.findAll();
    }

    @Transactional
    public Expensas saveExpensas(Expensas expensas) {
        return expensasRepository.save(expensas);
    }
}