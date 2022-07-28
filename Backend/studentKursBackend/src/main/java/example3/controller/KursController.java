package example3.controller;

import example3.entities.Kurs;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import example3.services.KursService;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/api/kurs")
public class KursController {

    private final KursService kursService;

    public KursController(KursService kursService) {
        this.kursService = kursService;
    }

    @GetMapping
    public ResponseEntity<List<Kurs>> getAllKurse(){
        return ok(kursService.getAllKurse());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Kurs> findKursById(@PathVariable Long id){
        return kursService.getKursById(id)
                .map(kurs -> ok(kurs))
                .orElse(ResponseEntity.noContent().build());
    }
    @PostMapping
    public  ResponseEntity<Kurs> createKurs(@RequestBody @Valid Kurs kurs){
        if (kurs.getId() != null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(kursService.createNewKurs(kurs));
    }

    @PutMapping
    public ResponseEntity<Kurs> updateKurs(@RequestBody @Valid Kurs kurs){
        if (kurs.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(kursService.updateKurs(kurs));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteKursById(@PathVariable Long id){
        kursService.deleteKursById(id);
        return ResponseEntity.ok().build();
    }
}
