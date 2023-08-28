import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationsRepository: ReservationRepository) {}

  async create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      timeStamp: new Date(),
      userId: '123',
    });
  }

  async findAll() {
    return this.reservationsRepository.find({});
  }

  async findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate(
      { _id },
      { $set: { updateReservationDto } },
    );
  }

  async remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id });
  }
}
