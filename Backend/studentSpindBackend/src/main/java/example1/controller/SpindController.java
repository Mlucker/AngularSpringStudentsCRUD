package example1.controller;

import example1.entities.Spind;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import example1.services.SpindService;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/api/spind")
public class SpindController {

    private final SpindService spindService;

    public SpindController(SpindService spindService) {
        this.spindService = spindService;
    }
    @GetMapping
    public ResponseEntity<List<Spind>> getAllSpinde(){
        return ok(spindService.getAllSpinde());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Spind> findSpindById(@PathVariable Long id){
        return spindService.getSpindById(id)
                .map(spind -> ok(spind))
                .orElse(ResponseEntity.noContent().build());
    }

    @PostMapping
    public  ResponseEntity<Spind> createSpind(@RequestBody @Valid Spind spind){
        if (spind.getId() != null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(spindService.createNewSpind(spind));
    }

    @PutMapping
    public ResponseEntity<Spind> updateSpind(@RequestBody @Valid Spind spind){
        if (spind.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(spindService.updateSpind(spind));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSpindById(@PathVariable Long id){
        spindService.deleteSpindById(id);
        return ResponseEntity.ok().build();
    }

}
